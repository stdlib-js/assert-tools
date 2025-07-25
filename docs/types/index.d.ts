/*
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/* eslint-disable max-lines */

import arrayfcn = require( '@stdlib/assert-tools-array-function' );
import arraylikefcn = require( '@stdlib/assert-tools-array-like-function' );
import typedarrayfcn = require( '@stdlib/assert-tools-typed-array-function' );

/**
* Interface describing the `tools` namespace.
*/
interface Namespace {
	/**
	* Returns a function which tests if every element in an array passes a test condition.
	*
	* ## Notes
	*
	* -   The predicate function should accept a single argument: an array element. If the array element satisfies a test condition, the function should return `true`; otherwise, the function should return `false`.
	* -   Given an input array, the returned function returns `true` if all elements pass the test and `false` otherwise.
	* -   The returned function returns `false` if provided an empty array.
	* -   The returned function returns `false` if not provided an array.
	*
	* @param predicate - function to apply
	* @returns an array function
	*
	* @example
	* var isOdd = require( '@stdlib/assert-is-odd' );
	*
	* var arr1 = [ 1, 3, 5, 7 ];
	* var arr2 = [ 3, 5, 8 ];
	*
	* var validate = ns.arrayfcn( isOdd );
	*
	* var bool = validate( arr1 );
	* // returns true
	*
	* bool = validate( arr2 );
	* // returns false
	*/
	arrayfcn: typeof arrayfcn;

	/**
	* Returns a function which tests if every element in an array-like object passes a test condition.
	*
	* ## Notes
	*
	* -   The predicate function should accept a single argument: an element from an array-like object. If the element satisfies a test condition, the function should return `true`; otherwise, the function should return `false`.
	* -   Given an input array-like object, the returned function returns `true` if all elements pass the test and `false` otherwise.
	* -   The returned function returns `false` if provided an empty array-like object.
	* -   The returned function returns `false` if not provided an array-like object.
	*
	* @param predicate - function to apply
	* @returns an array-like object function
	*
	* @example
	* var isOdd = require( '@stdlib/assert-is-odd' );
	*
	* var arr1 = [ 1, 3, 5, 7 ];
	* var arr2 = [ 3, 5, 8 ];
	*
	* var validate = ns.arraylikefcn( isOdd );
	*
	* var bool = validate( arr1 );
	* // returns true
	*
	* bool = validate( arr2 );
	* // returns false
	*/
	arraylikefcn: typeof arraylikefcn;

	/**
	* Returns a function which tests if every element in a typed array passes a test condition.
	*
	* ## Notes
	*
	* -   The predicate function should accept a single argument: a typed array element. If the element satisfies a test condition, the function should return `true`; otherwise, the function should return `false`.
	* -   Given an input typed array, the returned function returns `true` if all elements pass the test and `false` otherwise.
	* -   The returned function returns `false` if provided an empty typed array.
	* -   The returned function returns `false` if not provided a typed array.
	*
	* @param predicate - function to apply
	* @returns a typed array function
	*
	* @example
	* var isOdd = require( '@stdlib/assert-is-odd' );
	*
	* var arr1 = new Int32Array( [ 1, 3, 5, 7 ] );
	* var arr2 = new Int32Array( [ 1, 3, 5, 8 ] );
	*
	* var validate = ns.typedarrayfcn( isOdd );
	*
	* var bool = validate( arr1 );
	* // returns true
	*
	* bool = validate( arr2 );
	* // returns false
	*/
	typedarrayfcn: typeof typedarrayfcn;
}

/**
* Assertion utility tools.
*/
declare var ns: Namespace;


// EXPORTS //

export = ns;
