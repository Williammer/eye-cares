import delay from 'timeout-as-promise';
import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import NumMemoryRow from '@/components/NumMemoryRow.vue';

// TODO: add and make these unit tests pass later
describe('NumMemoryRow.vue', () => {
  it('should have the expected DOM of initial states', () => {
    const eventHub = new Vue();
    const wrapper = shallowMount(NumMemoryRow);
    wrapper.setProps({
      idx: 1,
      num: '0123',
      reciteTime: 300,
      eventHub,
    });

    expect(wrapper.contains('button')).toBe(true);
    const { vm } = wrapper;
    expect(vm.reciting).toBe(false);
  });

  it('click button to start reciting until reciteTime is over', async () => {
    const wrapper = shallowMount(NumMemoryRow);
    wrapper.setProps({
      idx: 'bar',
      num: '0123',
      reciteTime: 300,
    });

    const { vm } = wrapper;
    const startBtn = wrapper.find('button');
    startBtn.trigger('click');
    expect(vm.reciting).toBe(true);
    expect(vm.recited).toBe(false);
    expect(wrapper.html()).toContain('<span>0123</span>');

    await delay(300);

    expect(vm.reciting).toBe(false);
    expect(vm.recited).toBe(true);
    expect(wrapper.contains('input')).toBe(true);
  });
});
