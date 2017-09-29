# jquery-input-limiter
A tiny jquery plugin for input length control/visualization

# Usage

Put each of your input fields ("input" and "textarea" tags are supported) inside their own div of a 'countable-wrapper' class. Inside, put a span with data-attribute containing the maximum amount of characters allowed for that field's input. Run with 'debug' option to resolve jquery selection issues.

```
<div class="countable-wrapper">
  Title:        <input type="text"/>
  Symbols left: <span data-max-length="35"></span>
</div>

<div class="countable-wrapper">
  Description:  <textarea/>
  Symbols left: <span data-max-length="400"></span>
</div>
```
