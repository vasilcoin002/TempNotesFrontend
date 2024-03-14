import './shadcn.css'
import './App.css'
import { useState } from 'react';
import { TypeNote, TypeThemeColor } from './types';
import ChangeThemeButton from './components/ui/changeThemeButton';
import { useSelector } from 'react-redux';
import { RootState } from './state/store';
import NotesContainer from './components/NotesContainer';
import { Avatar } from '@radix-ui/react-avatar';
import { AvatarFallback, AvatarImage } from './components/ui/avatar';

function App() {
    const [notes, setNotes] = useState<TypeNote[]>([
        {
            id: "1",
            title: "Note111111111111111111111111111111111",
            description: "this is description for note1adaaa  aaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
            expiresAt: "aboba"
        },
        {
            id: "2",
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
            <header className={'flex justify-between py-3 px-6 ' + themeColor}>
                <ChangeThemeButton/>
                <Avatar className={"avatar w-[40px] h-[40px] overflow-hidden cursor-pointer " + themeColor}>
                    <AvatarImage alt='avatar'/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </header>
            <main>
                <NotesContainer notes={notes}/>
            </main>
        </div>
    )
}

export default App
