import { createContext, ReactNode } from 'react'

export interface UserProps {
	name: string
	avatarUrl: string
}

export interface AuthContextDataProps {
	user: UserProps
	signIn: () => Promise<void>
}

interface AuthProviderProps {
	children: ReactNode
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
	async function signIn() {
		console.log('vamos logar')
	}

	return (
		<AuthContext.Provider
			value={{
				signIn,
				user: { name: 'Ronaldo', avatarUrl: 'https://github.com/ronaldovctor.png' },
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}
