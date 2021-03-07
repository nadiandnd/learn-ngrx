import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Tutorial } from './../models/tutorial.model';
import { AddTutorial, RemoveTutorial } from './../actions/tutorial.actions';

export class TutorialStateModal {
    tutorials: Tutorial[]
}

@State<TutorialStateModal>({
    name: 'tutorials',
    defaults: {
        tutorials: []
    }
})

export class TutorialState {

    @Selector()
    static getTutorials(state: TutorialStateModal) {
        return state.tutorials
    }

    @Action(AddTutorial)
    add({getState, patchState}: StateContext<TutorialStateModal>, { payload }: AddTutorial){
        const state = getState();
        patchState({
            tutorials: [...state.tutorials, payload]
        })
    }

    @Action(RemoveTutorial)
    Remove({getState, patchState}: StateContext<TutorialStateModal>, { payload }: RemoveTutorial){
        patchState({
            tutorials: getState().tutorials.filter(a => a.name != payload)
        })
    }
}