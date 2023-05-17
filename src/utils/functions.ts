import * as Tone from 'tone';

export type ModifyClassAction = 'add' | 'remove' | 'toggle';

export const toggleButton = (
  button: HTMLElement,
  sampler: Tone.Sampler,
  hasSwing: boolean,
) => {
  // setup swing button behaviour
  if (button.classList.contains('swing')) {
    if (button.textContent === 'SWING OFF') {
      sampler.context.transport.swing = 0.25;
      button.textContent = 'SWING ON\xa0';
      hasSwing = true;
    } else {
      sampler.context.transport.swing = 0;
      button.textContent = 'SWING OFF';
      hasSwing = false;
    }
    return hasSwing;
  } else {
    // setup play/pause button behaviour
    const playStopBtn = document.querySelector<HTMLButtonElement>('button > i');
    if (button.textContent === 'PLAY') {
      sampler.context.transport.start();
      button.textContent = 'STOP';
      playStopBtn!.textContent = 'pause';
    } else {
      sampler.context.transport.stop();
      button.textContent = 'PLAY';
      playStopBtn!.textContent = 'play_arrow';
    }
  }
};

export const modifyHighlightClass = (
  el: HTMLElement,
  hasSwing: boolean,
  modifyClass: (
    el: HTMLElement,
    action: ModifyClassAction,
    elClass: string,
  ) => void,
) => {
  if (!hasSwing) {
    modifyClass(el, 'add', 'highlight');
    setTimeout(() => {
      modifyClass(el, 'remove', 'highlight');
    }, 120);
  } else {
    modifyClass(el, 'add', 'highlight-swing');
    setTimeout(() => {
      modifyClass(el, 'remove', 'highlight-swing');
    }, 120);
  }
};

export const modifyClass = (
  el: HTMLElement,
  action: ModifyClassAction,
  elClass: string,
) => {
  if (action === 'add') {
    el.classList.add(elClass);
  } else if (action === 'remove') {
    el.classList.remove(elClass);
  } else {
    el.classList.toggle(elClass);
  }
};

export const singleClick = (el: HTMLElement, sampler: Tone.Sampler) => {
  sampler.triggerAttackRelease('C3', '16n', Tone.now());
  modifyClass(el, 'toggle', 'clicked');
  modifyClass(el, 'remove', 'dbl-clicked');
};

export const doubleClick = (el: HTMLElement, sampler: Tone.Sampler) => {
  sampler.triggerAttackRelease('C4', '16n', Tone.now());
  modifyClass(el, 'toggle', 'dbl-clicked');
  modifyClass(el, 'remove', 'clicked');
};
