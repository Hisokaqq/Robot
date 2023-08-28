import { Backdrop, Environment, Float, Ring, RoundedBox, Scroll, ScrollControls, Sparkles } from "@react-three/drei";
import OurComponent from "./components/OurComponent";
import Robot from "./components/Robot";
import baffle from 'baffle'
import { useEffect } from "react";
function App() {
  useEffect(()=> {
    const target = baffle('.title')
    target.set({
      characters: '░D░o░c░t░o░r░',
      speed: 100
    })
    target.start()
    target.reveal(1000,1000)
  })
  return (
    <>
      <color attach="background" args={["#333333"]} />
      <ScrollControls pages={6} damping={0.1}>
        <ambientLight intensity={0.4} /> 
        <spotLight position={[0, 25, 0]} angle={0.15} penumbra={1} castShadow intensity={2} shadow-bias={-.0001}/>
        
<Float
  speed={1} // Animation speed, defaults to 1
  rotationIntensity={1} // XYZ rotation intensity, defaults to 1
  floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
  floatingRange={[0, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
>
  <Ring scale={3.5} position-z={-2.5} args={[0, .95, 60]} receiveShadow>
    <meshStandardMaterial color={'#2a3a3f'}></meshStandardMaterial>
  </Ring>
</Float>
        <Robot scale={1.2} />
        <Sparkles size={2} color={"#fff"} scale={[10,10,10]}/>
        <Backdrop receiveShadow floar={20.5} segments={100} scale={[50,30,10]} position={[4, -10, 0]}>
          <meshStandardMaterial color={"#0a1a1f"}/>
        </Backdrop>
        <Scroll html style={{width: '100%'}}>
          <h1 className='title' style={{ color: '#cdcbca',position: 'absolute', top: `65vh`,left: '50%', fontSize: '13em', transform: `translate(-50%,-50%)` }}>DOCTOR</h1>
          
          <div className='row' style={{ position: 'absolute', top: `132vh`}}>
            <h2>Be a Man of the Future.</h2>
            <p style={{ maxWidth: '400px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>
            <button>Read more</button>
          </div>

          <div className='row' style={{ position: 'absolute', top: `230vh`}}>
            <div className='col' style={{ position: 'absolute', right: `40px`, width: "540px"}}>
              <h2 style={{ maxWidth: "440px" }}>Tech-Savvy Side</h2>
              <p style={{ maxWidth: '440px' }}>Featuring a sleek, metallic design inspired by advanced technology, this aftershave bottle is as stylish as it is functional. But it's not just a pretty face - inside, you'll find a nourishing and protective aftershave formula that will leave your skin feeling refreshed and hydrated.</p>                
              <button>Read more</button>
            </div>
          </div>
          
          <h2 style={{ position: 'absolute', top: '350vh', left: '50%', transform: `translate(-50%,-50%)` }}>Cutting-Edge of Grooming</h2>              
          
          <button style={{ position: 'absolute', top: `590vh`,left: '50%', transform: `translate(-50%,-50%)` }}>Buy now</button>
        </Scroll>
      </ScrollControls>
      </>
  );
}

export default App;
