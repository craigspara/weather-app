import React, { Component } from 'react';
import {IMG_URL_MOON} from './constants';
import {MoonRiseSet} from './Moon-rise-set';

export const MoonPhases = (props) => {
  const {moonPhase} = props.data;

  const names = ['New Moon','Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'];

  /**
   * @description: correlates moonPhase data point with phase name and icon url
   * @returns: Object
   */
  const findPhaseRange = (moonPhase) => {
    console.log(moonPhase);
    let moon = {
      name: '',
      image: ''
    };

    switch (moonPhase !== undefined) {
      case moonPhase === 0 || moonPhase === 1:
        moon = {
          name: names[0],
          image: IMG_URL_MOON + '/wi-moon-alt-new.svg'
        };
        break;
      case moonPhase < 0.50:
        if (moonPhase > 0 && moonPhase < 0.25) {
          if (moonPhase > 0 && moonPhase < 0.04) {
            moon = {
              name: names[1],
              image: IMG_URL_MOON + '/wi-moon-waxing-crescent-1.svg'
            };
            break;
          }
          if (moonPhase >= 0.05 && moonPhase <= 0.08) {
            moon = {
              name: names[1],
              image: IMG_URL_MOON + '/wi-moon-waxing-crescent-2.svg'
            };
            break;
          }
          if (moonPhase >= 0.09 && moonPhase <= 0.12) {
            moon = {
              name: names[1],
              image: IMG_URL_MOON + '/wi-moon-waxing-crescent-3.svg'
            };
            break;
          }
          if (moonPhase >= 0.13 && moonPhase <= 0.16) {
            moon = {
              name: names[1],
              image: IMG_URL_MOON + '/wi-moon-waxing-crescent-4.svg'
            };
            break;
          }
          if (moonPhase >= 0.17 && moonPhase <= 0.20) {
            moon = {
              name: names[1],
              image: IMG_URL_MOON + '/wi-moon-waxing-crescent-5.svg'
            };
            break;
          }
          if (moonPhase >= 0.21 && moonPhase <= 0.24) {
            moon = {
              name: names[1],
              image: IMG_URL_MOON + '/wi-moon-waxing-crescent-6.svg'
            };
            break;
          }
        } else if (moonPhase === 0.25) {
          moon = {
            name: names[2],
            image: IMG_URL_MOON + '/wi-moon-first-quarter.svg'
          };
          break;
        } else {
          if (moonPhase > 0 && moonPhase < 0.25) {
            if (moonPhase > 0.25 && moonPhase <= 0.29) {
              moon = {
                name: names[3],
                image: IMG_URL_MOON + '/wi-moon-waxing-gibbous-1.svg'
              };
              break;
            }
            if (moonPhase >= 0.30 && moonPhase <= 0.33) {
              moon = {
                name: names[3],
                image: IMG_URL_MOON + '/wi-moon-waxing-gibbous-2.svg'
              };
              break;
            }
            if (moonPhase >= 0.34 && moonPhase <= 0.37) {
              moon = {
                name: names[3],
                image: IMG_URL_MOON + '/wi-moon-waxing-gibbous-3.svg'
              };
              break;
            }
            if (moonPhase >= 0.38 && moonPhase <= 0.41) {
              moon = {
                name: names[3],
                image: IMG_URL_MOON + '/wi-moon-waxing-gibbous-4.svg'
              };
              break;
            }
            if (moonPhase >= 0.42 && moonPhase <= 0.45) {
              moon = {
                name: names[3],
                image: IMG_URL_MOON + '/wi-moon-waxing-gibbous-5.svg'
              };
              break;
            }
            if (moonPhase >= 0.46 && moonPhase <= 0.49) {
              moon = {
                name: names[3],
                image: IMG_URL_MOON + '/wi-moon-waxing-gibbous-6.svg'
              };
              break;
            }
          }
        }


        break;
      case moonPhase === 0.50:
        moon = {
          name: names[4],
          image: IMG_URL_MOON + '/wi-moon-full.svg'
        };
        break;

      case moonPhase > 0.50:
        if (moonPhase > 0.50 && moonPhase < 0.75) {
          if (moonPhase > 0.50 && moonPhase <= 0.54) {
            moon = {
              name: names[5],
              image: IMG_URL_MOON + '/wi-moon-waning-gibbous-1.svg'
            };
            break;
          }
          if (moonPhase >= 0.55 && moonPhase <= 0.58) {
            moon = {
              name: names[5],
              image: IMG_URL_MOON + '/wi-moon-waning-gibbous-2.svg'
            };
            break;
          }
          if (moonPhase >= 0.59 && moonPhase <= 0.62) {
            moon = {
              name: names[5],
              image: IMG_URL_MOON + '/wi-moon-waning-gibbous-3.svg'
            };
            break;
          }
          if (moonPhase >= 0.63 && moonPhase <= 0.66) {
            moon = {
              name: names[5],
              image: IMG_URL_MOON + '/wi-moon-waning-gibbous-4.svg'
            };
            break;
          }
          if (moonPhase >= 0.67 && moonPhase <= 0.70) {
            moon = {
              name: names[5],
              image: IMG_URL_MOON + '/wi-moon-waning-gibbous-5.svg'
            };
            break;
          }
          if (moonPhase >= 0.71 && moonPhase <= 0.74) {
            moon = {
              name: names[5],
              image: IMG_URL_MOON + '/wi-moon-waning-gibbous-6.svg'
            };
            break;
          }
        } else if (moonPhase === 0.75) {
          moon = {
            name: names[6],
            image: IMG_URL_MOON + '/wi-moon-third-quarter.svg'
          };
          break;
        } else {
          if (moonPhase > 0.75 && moonPhase <= 0.79) {
            moon = {
              name: names[7],
              image: IMG_URL_MOON + '/wi-moon-waning-crescent-1.svg'
            };
            break;
          }
          if (moonPhase >= 0.80 && moonPhase <= 0.83) {
            moon = {
              name: names[7],
              image: IMG_URL_MOON + '/wi-moon-waning-crescent-2.svg'
            };
            break;
          }
          if (moonPhase >= 0.84 && moonPhase <= 0.87) {
            moon = {
              name: names[7],
              image: IMG_URL_MOON + '/wi-moon-waning-crescent-3.svg'
            };
            break;
          }
          if (moonPhase >= 0.88 && moonPhase <= 0.91) {
            moon = {
              name: names[7],
              image: IMG_URL_MOON + '/wi-moon-waning-crescent-4.svg'
            };
            break;
          }
          if (moonPhase >= 0.92 && moonPhase <= 0.95) {
            moon = {
              name: names[7],
              image: IMG_URL_MOON + '/wi-moon-waning-crescent-5.svg'
            };
            break;
          }
          if (moonPhase >= 0.96 && moonPhase <= 0.99) {
            moon = {
              name: names[7],
              image: IMG_URL_MOON + '/wi-moon-waning-crescent-6.svg'
            };
            break;
          }
        }
        break;
    }

    return moon;

  };

    let phaseData = findPhaseRange(moonPhase);

    return (
      <div>
        <figure>
          <img className="moon-phase__icon-small" src={phaseData.image} alt={`${phaseData.name} moon icon`} />
          <figcaption>{phaseData.name}</figcaption>
        </figure>
        <MoonRiseSet/>
      </div>
    )

};