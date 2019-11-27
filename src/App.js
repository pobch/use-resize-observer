import React, { useRef, useMemo } from 'react'
import logo from './logo.svg'
import './App.css'
import { useResizeObserver } from './hooks/useResizeObserver'

function App() {
  const container = useRef()
  const longParagraph = useRef()

  const refs = useMemo(() => [container, longParagraph], [container, longParagraph])
  const dimensions = useResizeObserver(refs)
  console.log(dimensions)

  return (
    <div className="App" ref={container}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Try to resize the window and see <code>console.log()</code> result.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="long-div" ref={longParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu nibh libero.
        Suspendisse vel laoreet diam. Suspendisse id odio auctor, aliquet augue sed, eleifend nunc.
        Suspendisse id convallis purus. Ut lobortis faucibus metus, in porta mauris placerat vitae.
        Donec vitae scelerisque ante, vitae tincidunt tortor. Vestibulum efficitur dolor est, id
        efficitur eros pretium egestas. Mauris sed nulla tempus ligula blandit pellentesque et sed
        orci. Duis mollis fringilla elementum. Etiam condimentum accumsan justo in porta. Vestibulum
        id molestie tellus. Nunc commodo sollicitudin tempus. Duis dignissim metus in tincidunt
        finibus. Aliquam lorem arcu, rhoncus nec tempus ac, pellentesque ac justo. Ut molestie nec
        purus sit amet gravida. Pellentesque dapibus eros odio, vel pellentesque dolor ultricies in.
        Vivamus consequat diam sit amet sem dignissim, nec euismod erat pharetra. Aenean eu elit
        risus. Etiam varius libero dui, pulvinar posuere ante aliquet vel. In pulvinar ante odio,
        sed cursus risus congue vitae. Proin sed ornare felis, fermentum convallis sem. Nunc sodales
        lacus id justo congue, a mattis dolor tristique. Vestibulum non ligula sapien. Donec in nibh
        faucibus est convallis tincidunt sit amet non eros. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia Curae; Curabitur euismod pulvinar bibendum. Donec
        tellus ipsum, pharetra eu sem in, cursus efficitur diam. Proin suscipit justo turpis, quis
        bibendum ligula tincidunt ac. Quisque sit amet ante odio. Fusce in justo rhoncus, iaculis
        arcu ac, aliquam turpis. Vestibulum quis sem diam. Vivamus finibus mattis nunc. Cras
        bibendum odio sit amet cursus suscipit. Nam et massa eu ante ultrices tincidunt ut eu velit.
        Nunc rhoncus mi vitae quam mattis hendrerit. Ut iaculis consectetur euismod. Maecenas mattis
        bibendum ligula ut consectetur. Etiam porta ex vel velit laoreet fringilla. Nulla congue
        diam ut sodales ornare. Aliquam erat volutpat. Suspendisse vehicula felis at dolor tristique
        varius. Etiam tincidunt orci ac orci pretium, ut tempus sapien faucibus. Vivamus volutpat
        varius posuere. Suspendisse tincidunt, leo viverra facilisis accumsan, turpis sem finibus
        ipsum, vel condimentum neque velit vel odio. Phasellus luctus placerat felis nec congue.
        Nullam metus orci, maximus mattis cursus molestie, cursus varius urna. Curabitur placerat
        tempus lorem ac dapibus. Maecenas at elementum sem, non imperdiet risus. Pellentesque
        efficitur enim et venenatis malesuada. Phasellus tellus libero, commodo sit amet justo non,
        posuere dictum tortor. Sed id risus lacus. Curabitur tempus sodales metus, at convallis
        ipsum pulvinar nec. Ut sit amet orci ligula. Donec ipsum odio, elementum nec venenatis in,
        viverra sed nulla. Etiam nec eros condimentum, scelerisque mauris quis, pulvinar elit.
        Nullam a odio eros. Aliquam placerat lacus dignissim cursus convallis. Etiam blandit
        interdum facilisis. Morbi commodo lacinia libero quis mattis. Donec eleifend justo vel
        sodales scelerisque.
      </div>
    </div>
  )
}

export default App
