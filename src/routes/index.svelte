<script>
  const DEFAULT_COLOR = "#2196F3";
  let color = DEFAULT_COLOR;
  let input = "";

  function validate(color) {
    return !!color.match("^#?[0-9a-fA-F]{6}$")
  }

  function hash(txt = "") {
    return txt.startsWith("#") ? txt : "#" + txt;
  }

  function truncate(txt = "") {
    return txt.substring(0, 7); // comprensive of #
  }

  function setColor(color) {
    typeof document !== 'undefined' && document.documentElement.style.setProperty('--active-color', color);
  }

  function onColorChange({ target }) {
    const value = truncate(hash(target.value));
    
    input = value;
    
    if (!validate(input)) {
      color = DEFAULT_COLOR;
      isValid = false;
    }

    color = input;
    setColor(color)
  }

  setColor(color);
</script>

<div class="container">
  <input placeholder={color} bind:value={input} on:input={onColorChange}/>
</div>

<style>
  :root {
    --text-placeholder: rgba(255,255,255, .5);
    --default-color: #2196F3;
    --active-color: var(--default-color);
  }
	.container {
    font-family: sans-serif;
		height: 100vh;
		width: 100vw;
    background-color: var(--active-color);
    display: flex;
    align-items: center;
    justify-content: center;
	}
  .container input {
    border: none;
    background: rgba(0, 0, 0, 0.25);
    font-size: 3rem;
    text-align: center;
    color: var(--text-placeholder);
    max-width: 200px;
    width: 100%;
  }
  .container input:focus {
    outline: none;
  }
  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: var(--text-placeholder);
    opacity: 1; /* Firefox */

  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: var(--text-placeholder);
  }

  :-ms-input-placeholder { /* Microsoft Edge */
    color: var(--text-placeholder);
  }
</style>
