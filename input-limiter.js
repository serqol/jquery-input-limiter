require(['jquery'], function($) {
    var CounterWidget = function(element) {
        this.widget = $(element);
        this.$input = (this.widget.find('textarea').length > 0) ? this.widget.find('textarea') : this.widget.find('input');
        this.countSpan = null;
        this.maxLength = parseInt(this.widget.data('max-length'));

        this.init = function() {
            var pos = this.$input.position();
            this.$input.after('<span></span>');
            this.countSpan = this.widget.find('span');
            this.countSpan.text('Осталось сиволов: ' + this.maxLength);
            this.countSpan.css({
                position: "absolute",
                top: (pos.top - 25) + "px",
                right: 0,
                fontSize: 12 + "px",
                color: '#808080',
            });
        };

        this.update = function(event) {
            var len = $(event.target).val().length;
            var text = $(event.target).val();
            $(this.countSpan).text('Осталось сиволов: ' + (this.maxLength - len));
            $(event.target).val(text.slice(0, this.maxLength - 1));
        };

        this.init();
        this.$input.on('input', this.update.bind(this));
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