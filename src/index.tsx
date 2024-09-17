import { StrictMode } from 'react';
import { App } from './components/app';
import * as ReactDOMClient from 'react-dom/client';

import './styles/index.scss';

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container!);

root.render(
	<StrictMode>
			<App />
	</StrictMode>
);
