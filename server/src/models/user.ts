import { TokenPayload } from './../auth/auth'
import { Model } from 'objection'
import { AppError, AppErrorType } from '../errors/AppError'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// string, integer, float, boolean, json, jsonb, date, datetime

class User extends Model {
	id: number
	firstName: string
	lastName: string
	email: string
	password: string
	isActive: boolean

	static get tableName() {
		return 'users'
	}

	static get jsonSchema() {
		return {
			type: 'object',
			required: ['firstName', 'lastName', 'email', 'password', 'isActive'],
			properties: {
				id: { type: 'integer' },
				firstName: { type: 'string' },
				lastName: { type: 'string' },
				email: { type: 'string' },
				password: { type: 'string' },
				isActive: { type: 'boolean' },
			},
		}
	}

	static async Login(
		email: string,
		password: string
	): Promise<{ error?: AppError; token?: string }> {
		try {
			const [foundUser] = await User.query().where({ email })
			if (!foundUser) {
				return {
					error: new AppError(
						AppErrorType.RESOURCE_NOT_FOUND,
						'A user with that email was not found in database'
					),
				}
			}
			if (!bcrypt.compareSync(password, foundUser.password)) {
				return {
					error: new AppError(
						AppErrorType.AUTHENTICATION_FAILED,
						"Password doesn't match!"
					),
				}
			}
			const tokenPayload: TokenPayload = {
				sub: foundUser.id,
				iat: Date.now(),
			}
			const token = jwt.sign(tokenPayload, process.env.SECRET_KEY as string)
			return {
				token,
			}
		} catch (err) {
			return {
				error: new AppError(AppErrorType.DATABASE_ERROR, 'Could not login user', err)
			}
		}
	}

	static async Register(user: User): Promise<{ error?: AppError; user?: User }> {
		try {
			const [foundUser] = await User.query().where({ email: user.email })
			if (foundUser) {
				return {
					error: new AppError(AppErrorType.RESOURCE_ALREADY_EXISTS, 'The user with that email already exists')
				}
			}
			const password = bcrypt.hashSync(user.password, 10)
			const newUser = await User.query().insert({...user, password})
			return {
				user: newUser
			}
		} catch (err) {
			return {
				error: new AppError(AppErrorType.DATABASE_ERROR, 'Could not register user', err)
			}
		}
	}
}

export default User
