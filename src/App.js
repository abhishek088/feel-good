import { useState } from 'react'
import Grid from '@material-ui/core/Grid'
import Text from './components/Text'
import Button from './components/Button'
import './index.css'

const App = () => {
  const [cuteText, setCuteText] = useState('')

  const adjectives = ["beautiful", "cute", "hot", "adorable", "affectionate", "alluring", 
                      "amazing", "amazing", "attractive", "beloved", "bewitching", "breathtaking", 
                      "bubbly", "candid", "captivating", "charming", "classy", "cuddly", "delightful", 
                      "dependable", "elegant", "emotional", "entertaining", "fashionable", "fearless", 
                      "fiery", "flawless", "fun", "genuine", "gorgeous", "graceful", "magnetic", "innocent", 
                      "intelligent", "sassy", "romantic", "ravishing", "radiating", "pretty", "precious", 
                      "perfect", "nice", "lovely", "likable", "kind-hearted", "joyful", "sexy", "smart", 
                      "sophisticated", "special", "sweet", "wonderful", "warm-hearted", "voluptuous", 
                      "valued", "unique", "understanding", "trustworthy", "talented", "mine - are you?"]

  const generateCuteText = () => {
    let random = Math.floor(Math.random() * adjectives.length)
    console.log(adjectives[random])
    setCuteText('"Reveti, you are ' + adjectives[random] + '!"')
  }

  return (
    <div>
      <Grid xs='12' id='text-box'>
        <Text passText={cuteText} />
        <Button onClick={generateCuteText} />
      </Grid>
    </div>
  )
}

export default App

