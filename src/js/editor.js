"use strict";

wp.domReady(() => {

  wp.blocks.unregisterBlockStyle('core/button', 'default');
  wp.blocks.unregisterBlockStyle('core/button', 'fill');
  wp.blocks.unregisterBlockStyle('core/button', 'outline');

  wp.blocks.registerBlockStyle('core/button', [{
    name: 'primary-button',
    label: 'Primary Button',
    isDefault: true
  }, {
    name: 'secondary-button',
    label: 'Secondary Button'
  }]);

  wp.blocks.registerBlockStyle('core/heading', [{
    name: 'eyebrow-rainbow',
    label: 'Eyebrow Rainbow',
  }, {
    name: 'eyebrow-monotone',
    label: 'Eyebrow Monotone'
  }]);

  wp.blocks.registerBlockStyle('core/paragraph', [{
    name: 'category',
    label: 'Category',
  }]);

  wp.blocks.registerBlockStyle('core/group', [{
    name: 'justify-center-xy',
    label: 'Logo Farm',
  }]);
  
  // Need more control for Group block - uncomment code below.
  // wp.blocks.registerBlockStyle( 'core/group', [
  // 	{
  // 		name: 'default',
  // 		label: 'Default',
  // 		isDefault: true,
  // 	},
  // 	{
  // 		name: 'full-width-content',
  // 		label: 'Full Width',
  // 	},
  // ]);
});