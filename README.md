# jquery-input-limiter
A tiny jquery plugin for input length control/visualization

# Usage

Put each of your input fields ("input" and "textarea" tags are supported) inside their own div of a 'countable-wrapper' class.
Options:
1. data-max-length (required, maximum amount of characters enabled for one particular input);
2. data-message (optional, message displayed above the input, showing how much symbols are left for input, default: "Symbols left:");
3. data-offset (optional, span offset relative to its neighbor input, default: 15);


```
<div class="countable-wrapper" data-max-length="25">
  Title:        <input type="text"/>
</div>

<div class="countable-wrapper" data-max-length="400">
  Description:  <textarea/>
</div>
```
