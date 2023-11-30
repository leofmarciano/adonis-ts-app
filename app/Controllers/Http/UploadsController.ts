import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UploadsController {
    public async handle({ request }: HttpContextContract) {
        request.multipart.onFile('input_field_name', {}, async part => {
            console.log(part)
            return;
        })

        await request.multipart.process()

        const file = request.input('input_field_name')
        if (file.hasErrors) {
            return file.errors
        }
    }
}
