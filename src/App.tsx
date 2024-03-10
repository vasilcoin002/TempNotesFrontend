import './shadcn.css'
import './App.css'
import { useState } from 'react';
import { TypeNote, TypeThemeColor } from './types';
import ChangeThemeButton from './components/ui/changeThemeButton';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';
import NotesContainer from './components/NotesContainer';

function App() {
    const [notes, setNotes] = useState<TypeNote[]>([
        {
            title: "Note111111111111111111111111111111111",
            description: "this is description for note1adaaa  aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            expiresAt: "2023"
        },
        {
            title: "note2",
            description: "this is description for note2",
            expiresAt: "2024"
        }
    ])
    const themeColor: TypeThemeColor = useSelector(
        (state: RootState) => state.theme.themeColor
    )
    return (
        <div className={'wrapper ' + themeColor}>
            <header>
                <ChangeThemeButton/>
            </header>
            <main>
                <NotesContainer notes={notes}/>
            </main>
        </div>
    )
}

export default App
