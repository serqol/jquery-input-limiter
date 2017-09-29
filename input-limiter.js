require(['jquery'], function($) {
    var CounterWidget = function(element) {
        this.widget = $(element);
        this.input = (this.widget.find('textarea').length > 0) ? this.widget.find('textarea') : this.widget.find('input');
        this.countSpan = this.widget.find('span');
        this.maxLength = parseInt($(this.countSpan).data('max-length'));

        this.debug = function() {
          console.log(this.input);
          console.log(this.countSpan);
          console.log(this.maxLength);
        }

        this.init = function() {
            this.countSpan.text(this.maxLength);
        };

        this.update = function(event) {
            var len = $(event.target).val().length;
            var text = $(event.target).val();
            $(this.countSpan).text(this.maxLength - len);
            $(event.target).val(text.slice(0, this.maxLength - 1));
        };

        $(this.input).on('input', this.update.bind(this));

        this.init();
    };

    var Plugin = function(option) {
        $(this).each(function (k,v) {
            var data = $(v).data('CounterWidget');
            if (!data) $(v).data('CounterWidget', data = new CounterWidget(v));
            if ('string' === typeof option) data[option].call(v);
        });
    };

    $.prototype.CounterWidget = Plugin;

    $(function() {
        $('div.countable-wrapper').CounterWidget();
    });
});
