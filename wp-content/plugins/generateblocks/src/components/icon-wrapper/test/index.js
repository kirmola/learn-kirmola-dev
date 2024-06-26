import { render } from '@testing-library/react';
import IconWrapper from '../index';
import generalSvgs from '../../icon-picker/svgs-general';

const ChildrenComponent = () => ( <h2> { 'My children component' } </h2> );

describe( 'IconWrapper', () => {
	it( 'should render children elements', () => {
		const wrapper = render(
			<IconWrapper>
				<ChildrenComponent />
			</IconWrapper>
		);

		expect( wrapper ).toMatchSnapshot();
	} );

	it( 'should render left icon', () => {
		const wrapper = render(
			<IconWrapper icon={ generalSvgs.clock.icon }>
				<ChildrenComponent />
			</IconWrapper>
		);

		expect( wrapper ).toMatchSnapshot();
	} );

	it( 'should render right icon', () => {
		const wrapper = render(
			<IconWrapper icon={ generalSvgs.clock.icon } direction={ 'right' }>
				<ChildrenComponent />
			</IconWrapper>
		);

		expect( wrapper ).toMatchSnapshot();
	} );

	it( 'should hide children elements', () => {
		const wrapper = render(
			<IconWrapper icon={ generalSvgs.clock.icon } hideChildren={ true }>
				<ChildrenComponent />
			</IconWrapper>
		);

		expect( wrapper ).toMatchSnapshot();
	} );

	it( 'should render multiple children', () => {
		const wrapper = render(
			<IconWrapper icon={ generalSvgs.clock.icon }>
				<ChildrenComponent />
				<ChildrenComponent />
				<ChildrenComponent />
			</IconWrapper>
		);

		expect( wrapper ).toMatchSnapshot();
	} );

	it( 'should render without children', () => {
		const wrapper = render(
			<IconWrapper icon={ generalSvgs.clock.icon } />
		);

		expect( wrapper ).toMatchSnapshot();
	} );

	it( 'should render with wrapper element', () => {
		const wrapper = render(
			<IconWrapper
				icon={ generalSvgs.clock.icon }
				hideWrapper={ false }
				wrapperClassname={ 'my-wrapper-class' }
			>
				<ChildrenComponent />
			</IconWrapper>
		);

		expect( wrapper ).toMatchSnapshot();
	} );
} );
