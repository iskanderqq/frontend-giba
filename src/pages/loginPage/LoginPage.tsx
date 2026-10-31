import { Button, Field, Input } from "@chakra-ui/react"

export const LoginPage = () => {
  return (
		<main>
			<section>
				<form>
					<Field.Root required>
						<Field.Label>
							Email <Field.RequiredIndicator />
						</Field.Label>
						<Input placeholder='me@example.com' variant='subtle' />
					</Field.Root>
					<Field.Root required>
						<Field.Label>пароль</Field.Label>
						<Input placeholder='Пароль'  />
					</Field.Root>
					<Button type='submit'>Submit</Button>
				</form>
			</section>
		</main>
	)
}
