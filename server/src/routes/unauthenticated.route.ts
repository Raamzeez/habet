import e, { Router } from 'express'
import User from '../models/user'
import { AppErrorType } from '../errors/AppError'

const router = Router()

router.post('/user/login', async (req, res) => {
	const loginResult = await User.Login(req.body.email, req.body.password)
	if (loginResult.error) {
		// Error is password undefined or emtpy
		switch (loginResult.error.type) {
			case AppErrorType.AUTHENTICATION_FAILED: {
				return res.status(401).send({
					error: {
						name: 'AuthenticationFailed',
						message: 'The password was incorrect',
					},
				})
			}
			case AppErrorType.RESOURCE_NOT_FOUND: {
				return res.status(401).send({
					error: {
						name: 'UserNotFound',
						message: 'A User with that email was not found',
					},
				})
			}
			default: {
				return res.status(401).send({
					error: {
						name: 'UnexpectedFailure',
						message: 'Could not login user due for an unknown reason',
					},
				})
			}
		}
	}
	return res.status(200).send(loginResult.token)
})

router.post('/user/register', async (req, res) => {
	const { error, user } = await User.Register(req.body)
	if (error) {
		switch (error.type) {
			case AppErrorType.RESOURCE_ALREADY_EXISTS: {
				return res.status(400).send({
					error: {
						name: 'UserAlreadyExists',
						message: 'A user with that email already exists',
					},
				})
            }
            default: {
                return res.status(400).send({
                    error: {
                        name: 'UnexpectedFailure',
                        message: 'Could not register user because of an unexpected error'
                    }
                })
            }
		}
    }
    return res.status(201).send({
        user
    })
})
