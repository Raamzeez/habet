import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { Handler } from 'express'
import User from '../models/user'

// 12 hours
const VALID_TIME = 12 * 60 * 60 * 1000

export interface TokenPayload {
    iat: number // issue at time
    sub: number // user's id
}

export const strategy = new Strategy(
	{
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		secretOrKey: process.env.SECRET_KEY,
	},
	(payload, done) => {
		if (Date.now() > payload.iat + VALID_TIME) {
			return done({ expired: true }, false)
		}
		return done(null, payload)
	}
)

export const authenticator: Handler = (req, res, next) => {
	const authFunc = passport.authenticate(
		'jwt',
		{ session: false },
		async (err, payload: TokenPayload, info) => {
			if (err && err.expired) {
				return res.status(401).send({
					error: {
						name: 'TokenExpired',
						message: 'The token is expired',
					},
				})
            }
            if (!payload) {
                return res.status(401).send({
                    error: {
                        name: 'UndefinedPayload',
                        message: 'There is no payload'
                    }
                })
            }
            const user = await User.query().findById(0)
            console.log(user)
            return next()
		}
	)
	authFunc(req, res, next)
}
