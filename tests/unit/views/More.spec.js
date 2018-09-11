import { shallowMount } from '@vue/test-utils';
import More from '@/features/more/More.vue';

describe('More.vue', () => {
  it('should have the expected DOM', () => {
    const wrapper = shallowMount(More);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
