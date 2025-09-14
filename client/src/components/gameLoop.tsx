
import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RouterContainer } from '../router/routerContainer';
import React from 'react';
import GameloopSettingsCard from './GameLoopComps/settings_card';


type GameState = 'start' | 'progress' | 'end';

export const GameLoop: React.FC = () => {


    // Interfaces

    interface selectedOption {
        value: string;
        label: string;
    }

    const [gameState, setGameState] = useState<GameState>('start');

    const ChangeStatus = () => {

        const nextState: Record<GameState, GameState> = {
            'start': 'progress',
            'progress': 'end',
            'end': 'start'
        };

        setGameState(nextState[gameState]);
    }

    const Status = () => {
        console.log(gameState);
    }


    const [selectedCategory, setSelectedCategory] = useState<selectedOption>({
        value: '',
        label: 'Select Category'
    });

    const [difficulty, setDifficulty] = useState("");





    const StartGame = async (): Promise<void> => {

    }

    return (
        <>
            <main className="game_layout">
                {gameState === 'start' &&
                <>

                    <GameloopSettingsCard 
                        selectedOption={selectedCategory}
                        onOptionChange={setSelectedCategory}
                        onDifficutlyChange={setDifficulty}
                        difficulty={difficulty}
                        ChangeStatus={StartGame}
                    />


                </>
                }
                {gameState === 'progress' &&
                <>
                    <div>In the middle of game</div>
                    <button onClick={ChangeStatus}>ChangeStatus</button>
                    <button onClick={Status}>CheckStatus</button>
                </>
                }
                {gameState === 'end' &&

                <>

                    <div>End of game</div>
                    <button onClick={ChangeStatus}>ChangeStatus</button>
                    <button onClick={Status}>CheckStatus</button>

                </>
                }
            </main>
        </>
    );
};