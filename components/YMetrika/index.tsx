import * as React from 'react';
import { YMInitializer } from 'react-yandex-metrika';
 
const YMetrika = () => {
    return (
      <div>
          <YMInitializer accounts={[11111111]} options={{
                webvisor: true, 
                clickmap: true,
                trackLinks: true,
                accurateTrackBounce: true,
                trackHash: true
              }} 
            />
      </div>
    )
}

export default YMetrika