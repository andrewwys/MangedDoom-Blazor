class DebugTools {
  /**
 *
 * @param {number[]} colors: unit array
 */
  static showPalette(colors) {
    const paletteContainer = document.getElementById('color-palette');
    paletteContainer.innerHTML = '';
    for (let i = 0; i < colors.length; i++) {
      const colorEl = document.createElement('div');
      const color = colors[i];
      const r = color & 0xff;
      const g = (color >> 8) & 0xff;
      const b = (color >> 16) & 0xff;
      colorEl.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      colorEl.style.width = '20px';
      colorEl.style.height = '20px';
      colorEl.style.display = 'inline-block';
      paletteContainer.appendChild(colorEl);
    }
  }
}