import * as adobeXd from '../skills/adobe-xd.svg';
import adobeaudition from '../skills/adobeaudition.svg';
import afterEffects from '../skills/after-effects.svg';
import bootstrap from '../skills/bootstrap.svg';
import c from '../skills/c.svg';
import canva from '../skills/canva.svg';
import css from '../skills/css.svg';
import figma from '../skills/figma.svg';
import firebase from '../skills/firebase.svg';
import flutter from '../skills/flutter.svg';
import git from '../skills/git.svg';
import html from '../skills/html.svg';
import illustrator from '../skills/illustrator.svg';
import java from '../skills/java.svg';
import javascript from '../skills/javascript.svg';
import kotlin from '../skills/kotlin.svg';
import materialui from '../skills/materialui.svg';
import microsoftoffice from '../skills/microsoftoffice.svg';
import mysql from '../skills/mysql.svg';
import numpy from '../skills/numpy.svg';
import photoshop from '../skills/photoshop.svg';
import picsart from '../skills/picsart.svg';
import postgresql from '../skills/postgresql.svg';
import premierepro from '../skills/premierepro.svg';
import python from '../skills/python.svg';
import react from '../skills/react.svg';
import tailwind from '../skills/tailwind.svg';
import typescript from '../skills/typescript.svg';
import unity from '../skills/unity.svg';
import vitejs from '../skills/vitejs.svg';
import vue from '../skills/vue.svg';
import vuetifyjs from '../skills/vuetifyjs.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {

    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
   
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
   
    case 'javascript':
      return javascript;
   
    case 'react':
      return react;
   
    case 'typescript':
      return typescript;
    
    case 'bootstrap':
      return bootstrap;
   
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
   
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
   
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
   
    case 'python':
      return python;
   
    case 'adobe audition':
      return adobeaudition;
    
    case 'firebase':
      return firebase;
   
    case 'git':
      return git;
    
    case 'materialui':
      return materialui;
   
    case 'numpy':
      return numpy;
   
    case 'premiere pro':
      return premierepro;
  
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
   
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
 
    case 'unity':
      return unity;
    
    case 'canva':
      return canva;
    default:
      break;
  }
}