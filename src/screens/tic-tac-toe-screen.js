import React, { useState } from 'react';
import {
  Text, View, Dimensions, TouchableOpacity
} from 'react-native';
import { Button } from 'react-native-elements';
// See: https://github.com/SysCoder/tic-tac-toe-ai-engine#readme
import ticTacToeAiEngine from 'tic-tac-toe-ai-engine';
import FocusAwareStatusBar from '../components/focus-aware-status-bar';

const { width, height } = Dimensions.get('window');
const boardSize = Math.min(width, height) - 40;
const blankBoard = ['','','','','','','','',''];

const TicTacToeScreen = () => {
  const [board, setBoard] = useState(blankBoard);
  const [winner, setWinner] = useState('');
  const [depth, setDepth] = useState(0);
  const [humanPlays, setHumanPlays] = useState('X');
  return (
    <>
      <FocusAwareStatusBar barStyle="dark-content" />
      <View
        style={styles.container}
      >
        <View
          style={styles.board}
        >
          {board.map((squareValue, i)=>(
            <TouchableOpacity
              key={i}
              style={styles.square}
              onPress={()=>{
                if (!squareValue && (!winner || depth !== 1)) {
                  const newBoard = [...board];
                  newBoard[i] = humanPlays;
                  const result = ticTacToeAiEngine.computeMove(newBoard);
                  console.log('result', result);
                  setWinner(result.winner);
                  setDepth(result.depth);
                  setBoard(result.nextBestGameState);
                }
              }}
            >
              <Text
                style={styles.squareValueText}
              >
                {squareValue}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text
          style={styles.winnerText}
        >
          {winner && depth === 1 ? `The winner is ${winner}` : ' '}
        </Text>
        <Button
          title="Let the computer start"
          onPress={()=>{
            const result = ticTacToeAiEngine.computeMove(blankBoard);
            setWinner('');
            setHumanPlays('O');
            setBoard(result.nextBestGameState);
          }}
        />
        <Button
          title="Reset"
          onPress={()=>{
            setWinner('');
            setHumanPlays('X');
            setBoard(blankBoard);
          }}
        />
      </View>
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  board: {
    backgroundColor:'slategray',
    width: boardSize,
    height: boardSize,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent:'center',
    marginTop: 40
  },
  square: {
    backgroundColor: 'white',
    width: boardSize / 3.6,
    height: boardSize / 3.6,
    margin: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  squareValueText: {
    fontSize: 40
  },
  winnerText: {
    fontSize: 40
  }
};

export default TicTacToeScreen;
