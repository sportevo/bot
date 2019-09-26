const Promise = require('bluebird')
const _ = require('lodash')
module.exports = function (bp) {
    bp.middlewares.load()

    bp.hear({
        type: 'message',
        text: 'HELLO'
    }, (event, next) => {
        const { first_name, last_name } = event.user
        bp.logger.info('New user:', first_name, last_name)

        event.reply('#WelcomeSentences')

    })

    bp.hear('WelcomeSentencesQR_Costumer', (event, next) => {
        event.reply('#WelcomeSentences_QR_Costumer')
    })
    bp.hear('WelcomeSentencesQR_Furnisher', (event, next) => {
        event.reply('#WelcomeSentences_QR_Furnisher')
    })
    bp.hear('QR_JC', (event, next) => {
        event.reply('#QR_JC')
    })

    bp.hear('QR_InfoP', (event, next) => {
        event.reply('#Help_Needed')
    })

    bp.hear('QR_CaT', (event, next) => {
        event.reply('#ComTra')
    })
    bp.hear('QR_InfoG', (event, next) => {
        event.reply('#InfoG')
    })

    bp.hear('QR_Home', (event, next) => {
        event.reply('#Home')
    })
    bp.hear('QR_ByeCostumer', (event, next) => {
        event.reply('#ByeCostumer')
    })

    bp.hear('QR_Ryada', (event, next) => {
        event.reply('#Ryada')
    })
    bp.hear('QR_InfoP', (event, next) => {
        event.reply('#Help_Needed')
    })

    bp.hear('QR_Complaints', (event, next) => {
        event.reply('#Complaints')
    })

    bp.hear('QR_Tracking', (event, next) => {
        event.reply('#Tracking')
    })
    bp.hear('QR_CA', (event, next) => {
        event.reply('#CreateAccount')
    })
    bp.hear('QR_DT', (event, next) => {
        event.reply('#DeliveryTime')
    })
    bp.hear('QR_PM', (event, next) => {
        event.reply('#PaymentMethod')
    })
    bp.hear('QR_WWA', (event, next) => {
        event.reply('#WWAre')
    })
    bp.hear('QR_VA', (event, next) => {
        event.reply('#ValueAdded')
    })
    bp.hear('QR_SP', (event, next) => {
        event.reply('#SuitableProducts')
    })
    bp.hear('QR_Tracking', (event, next) => {
        event.reply('#Tracking')
    })
    bp.hear('QR_BeFurnisher', (event, next) => {
        event.reply('#FRegister')
    })
    bp.hear('QR_HTUP', (event, next) => {
        event.reply('#UpProduct')
    })
    bp.hear('QR_PC', (event, next) => {
        event.reply('#PanelControl')
    })
    bp.hear('QR_FF', (event, next) => {
        event.reply('#FullFillForm')
    })
    bp.hear('QR_ByeB', (event, next) => {
        event.reply('#ByeBye')
    })
    bp.hear('QR_SportevoInfo', (event, next) => {
        event.reply('#SportevoInfo')
    })
    bp.hear('QR_Support', (event, next) => {
        event.reply('#support')
    })

}