const shadowM2 = require('../index')

const { JSDOM } = require('jsdom');
const { document } = new JSDOM('').window;

global.document = document;

describe('shadowM2 function', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div class="shadowM2"></div>
      <div class="shadowM2"></div>
    `;
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('should apply hard shadow when specified', () => {
    const options = { shadow_type: 'hard' };
    shadowM2(options);

    const images = document.querySelectorAll('.shadowM2');
    images.forEach(image => {
      expect(image.style.boxShadow).toEqual('10px 10px 0px black');
    });
  });

  it('should apply soft shadow when specified', () => {
    const options = { shadow_type: 'soft' };
    shadowM2(options);

    const images = document.querySelectorAll('.shadowM2');
    images.forEach(image => {
      expect(image.style.boxShadow).toEqual('10px 10px 15px black');
    });
  });

  it('should apply padding, margin, and border when padding option is true', () => {
    const options = { padding: true };
    shadowM2(options);

    const images = document.querySelectorAll('.shadowM2');
    images.forEach(image => {
      expect(image.style.margin).toEqual('1em');
      expect(image.style.padding).toEqual('1em');
    });
  });
});
