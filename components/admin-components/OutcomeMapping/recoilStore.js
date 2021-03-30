import {
    RecoilRoot,
    atom,
    selector,
    useRecoilState,
    useRecoilValue,
  } from 'recoil';

export const coursesAtom = atom({
    key: 'coursesAtom',
    default: 'test'
}) 