console.log('Hello World!');
import Preact from 'preact';
import PreactDOM from 'preact-dom';
import Counter from './Counter';

document.addEventListener('DOMContentLoaded', function() {
  PreactDOM.render(
    Preact.createElement(Counter),
    document.getElementById('mount')
  );
});
