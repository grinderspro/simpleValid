/**
 * Created by grinderspro on 01.03.15.
 */

var simpleValid = {

    form: $(''),
    btn: [],
    error_class: 'error',
    valid_class: 'valid',

    init: function(e) {
        var self = this;
        self.form = $(e.target).closest('.weValidForm');
        self.btn = $(e.target);

        if (self.checkInput()) {
            return true;
        }

    },

    // Функция проверки полей формы
    checkInput: function() {

        var form = this.form,
            //sizeEmpty = ,
            btn = this.btn,
            self = this,
            emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        form.find('.required').each(function() {

            if ($(this).val() != '') {
                $(this).removeClass(self.error_class);
                $(this).addClass(self.valid_class);
            } else {
                $(this).addClass(self.error_class);
                $(this).removeClass(self.valid_class);
            }
        });

        // email проверка
        form.find('.weEmail').each(function() {
            if (emailPattern.test($(this).val())) {
                $(this).removeClass(self.error_class);
                $(this).addClass(self.valid_class);
            } else {
                $(this).addClass(self.error_class);
                $(this).removeClass(self.valid_class);
            }
        }),
            // валидация телефон
            form.find('.wePhone').each(function() {

                var countNumber = $(this).val().split(/\d/).length-1;

                if (countNumber == 12) {
                    $(this).removeClass(self.error_class);
                    $(this).addClass(self.valid_class);
                } else {
                    $(this).addClass(self.error_class);
                    $(this).removeClass(self.valid_class);
                }
            }),

            // Считаем к-во незаполненных полей
            sizeEmpty = form.find('.'+self.error_class).size();

        if (sizeEmpty > 0) {
            return false;
        } else {
            return true;
        }
    }

};
