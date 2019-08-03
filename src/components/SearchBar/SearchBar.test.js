import React from 'react';
import SearchBar from './SearchBar';
import renderer from 'react-test-renderer';

it('it renders correctly', () => {
    const tree = renderer
    .create(<SearchBar></SearchBar>)
    .toJSON();
    expect(tree).toMatchSnapShot();
});