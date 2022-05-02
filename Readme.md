# TSX-STATEMENTS

# Installation

```bash
yarn add tsx-statements
```

Or if you prefer npm :

```bash
npm i tsx-statements
```

# Usage

import components

```ts
import { If, Else, Select, When, OtherWise, Map } from 'tsx-statements';
```

-   ## IF - Else

    ```ts
    <If condition={age > 18}>
    	<p>You are an adult !</p>
    	<Else>Sorry, you can't see this content</Else>
    </If>
    ```

-   ## Select

    ```ts
    <Select>
    	<When condition={age > 70}>You are too old </When>
    	<When condition={age > 18}>You are an adult</When>
    	<When condition={age < 10}>You are too young </When>
    	<OtherWise>none of above conditions are true</OtherWise>
    </Select>
    ```

-   ## Map
    ### Full ts type support for items
    ***
    ### Map :
    ```ts
    <Map items={['alex', 'maria', 'max']}>
    	{name => (
    		<div>
    			<p>hello {name} !</p>
    		</div>
    	)}
    </Map>
    ```
    ### Filtered-Map :
    ```ts
    <Map items={[10, 12, 32, 67, 20, 30, 40]} filter={n => n > 25}>
    	{num => (
    		<div>
    			<p> {num} is greater than 25 ! </p>
    		</div>
    	)}
    </Map>
    ```
