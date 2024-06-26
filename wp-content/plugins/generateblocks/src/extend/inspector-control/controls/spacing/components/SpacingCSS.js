import addToCSS from '../../../../../utils/add-to-css';

export default function SpacingCSS( css, selector, attributes, device = '' ) {
	const styles = {
		'margin-top': attributes[ 'marginTop' + device ],
		'margin-right': attributes[ 'marginRight' + device ],
		'margin-bottom': attributes[ 'marginBottom' + device ],
		'margin-left': attributes[ 'marginLeft' + device ],
		'padding-top': attributes[ 'paddingTop' + device ],
		'padding-right': attributes[ 'paddingRight' + device ],
		'padding-bottom': attributes[ 'paddingBottom' + device ],
		'padding-left': attributes[ 'paddingLeft' + device ],
	};

	if ( attributes.useInnerContainer ) {
		delete styles[ 'padding-top' ];
		delete styles[ 'padding-right' ];
		delete styles[ 'padding-bottom' ];
		delete styles[ 'padding-left' ];
	}

	return (
		addToCSS( css, selector, styles )
	);
}
