import React from 'react';
import {
    faSpinner,
} from "@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/Spinner.scss'

export default function Spinner(){

	return <div className='pageSpinner'>
        <FontAwesomeIcon className='pageSpinnerIcon' icon={faSpinner} size="3x" spin />
    </div>;
}