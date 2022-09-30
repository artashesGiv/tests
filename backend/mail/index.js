const nodemailer = require('nodemailer')
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'siteinformingservice@gmail.com',
        pass: 'xftywqtydjouxmtl',
    },
})

const emails = ['naraxiss@gmail.com']

function createHtml(data) {
    let html = ''

    if (data.name) {
        html += wrapField(
            {
                name: 'Имя',
                value: data.name,
            },
            true,
        )
    }

    if (data.phone) {
        html += wrapField(
            {
                name: 'Телефон',
                value: data.phone,
            },
            true,
        )
    }

    if (data.email) {
        html += wrapField(
            {
                name: 'E-mail',
                value: data.email,
            },
            true,
        )
    }

    if (data.text) {
        html += wrapField({
            name: 'Текст',
            value: data.text,
        })
    }

    return html
}

function wrapField(field, bold) {
    if (bold) {
        return `<p><b>${field.name}:</b> ${field.value}</p>\n`
    }

    return `<p>${field.name}: ${field.value}</p>`
}

function send(req, res) {
    const html = createHtml(req.body)

    const mailOptions = {
        from: 'Burno <siteinformingservice@gmail.com>',
        to: '',
        subject: req.body.title || 'Заявка',
        html,
    }

    emails.forEach(email => {
        mailOptions.to = email
        transporter.sendMail(mailOptions, err => {
            if (err) console.log(err)
        })
    })

    res.status(200).end(JSON.stringify({ status: 'ok' }))
}

module.exports.send = send
