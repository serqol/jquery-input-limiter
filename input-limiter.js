require(['jquery'], function($) {
    var CounterWidget = function(element) {
        this.widget = $(element);
        this.$input = (this.widget.find('textarea').length > 0) ? this.widget.find('textarea').first() : this.widget.find('input').first();
        this.countSpan = null;
        this.maxLength = parseInt(this.widget.data('max-length'));
        this.message = undefined !== this.widget.data('message') ? this.widget.data('message') : 'Symbols left:';
        this.yOffset = undefined !== this.widget.data('y-offset') ? this.widget.data('y-offset') : 15;
        this.xOffset = undefined !== this.widget.data('x-offset') ? this.widget.data('x-offset') : 5;

        this.init = function() {
            var pos = this.$input.position();
            this.$input.after('<span></span>');
            this.countSpan = this.widget.find('span').first();
            this.countSpan.text(this.message + ' ' + this.maxLength);
            this.countSpan.css({
                position: "absolute",
                top: (pos.top - this.yOffset) + "px",
                right: this.xOffset + 'px',
                fontSize: 12 + "px",
                color: '#808080',
            });
        };

        this.update = function(event) {
            var len = $(event.target).val().length;
            var text = $(event.target).val();
            $(this.countSpan).text(this.message + ' ' + (this.maxLength - len));
            $(event.target).val(text.slice(0, this.maxLength - 1));
        };

        this.init();
        this.$input.on('input', this.update.bind(this));
    };

    var Plugin = function(option) {
        $(this).each(function (k,v) {
            var data = $(v).data('CounterWidget');
            if (undefined === data) $(v).data('CounterWidget', data = new CounterWidget(v));
            if ('string' === typeof option) data[option].call(v);
        });
    };

    $.prototype.CounterWidget = Plugin;

    $(function() {
        $('div.countable-wrapper').CounterWidget();
    });
});