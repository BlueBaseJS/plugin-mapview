import 'jest';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BlueBase } from '@bluebase/core';
import Plugin from '../../src/index';

configure({ adapter: new Adapter() });

test('Plugin should be correctly registered', async () => {
    const BB = new BlueBase();
    await BB.Plugins.register(Plugin);

    expect(BB.Plugins.has('plugin-mapView')).toBeTruthy();
});