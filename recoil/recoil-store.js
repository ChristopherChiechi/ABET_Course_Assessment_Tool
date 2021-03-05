import { atom } from 'recoil';

export const coordinatorCommentAtom = atom({
    key: "coordinator-comment",
    default: ""
});

export const termSelectAtom = atom({
    key: "term-select",
    default: {
        semester: "Fall",
        year: 2020
    }
});

export const userAtom = atom({
    key: "user",
    default: {
        username: "MT2020"
    }
});

export const formAtom = atom({
    key: "form"
});