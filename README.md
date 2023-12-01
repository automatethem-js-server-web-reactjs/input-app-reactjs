# input-app-reactjs

```
//npx create-react-app input-app-reactjs
//cd input-app-reactjs
cd input-app-reactjs
npm install
```

```
npm start
```

![](attach_files/screenshot1.png?raw=true)

참고)
"Content-Type": `application/json`, // application/json 타입 선언  
"Content-Type": `application/x-www-form-urlencoded`, // x-www-form-urlencoded 타입 선언  
'Content-Type': 'multipart/form-data'  
https://jw910911.tistory.com/117

참고) 입력 양식

!!!!  
How to create a form in React?  
https://www.geeksforgeeks.org/how-to-create-a-form-in-react/

## reactjs-doc-form

https://www.inflearn.com/course/lecture?courseSlug=%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8&unitId=93952

https://www.inflearn.com/course/lecture?courseSlug=%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%A6%AC%EC%95%A1%ED%8A%B8&unitId=129678

https://github.com/automatethem-js-server-web-reactjs/crud-app-reactjs-json-server-inflearn/blob/main/src/components/BlogForm.js

![](attach_files/form1.png?raw=true)

![](attach_files/form2.png?raw=true)

![](attach_files/form3.png?raw=true)

![](attach_files/form4.png?raw=true)

![](attach_files/form5.png?raw=true)

![](attach_files/form6.png?raw=true)

```
import { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const App = () => {
    const [products, setProducts] = useState([]);
    const titleRef = useRef(null);
    const priceRef = useRef(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        (async () => {
            const response = await fetch('http://localhost:3001/products');
            const json = await response.json();
            setProducts(json);
            console.log(json); //
        })();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        console.log(titleRef.current.value);
        console.log(priceRef.current.value);
        const response = await fetch('http://localhost:3001/products', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: titleRef.current.value,
                price: priceRef.current.value
            })
        });
        if (response.ok) {
            // 생성완료 후 alert생성
            alert('생성이 완료됐습니다.')
            navigate(`/`)
        }
        //const json = await response.json();
        //console.log(json); //
    }

    return (
        <div>

                        {
                            products.map(product => (
<div key={product.id}>
<div>{product.id}</div>
<div>{product.title}</div>
<div>{product.price}</div>
<hr/>
</div>
                                ))
                        }

            <form action="submit">
                <div>
                    <label for="title">이름</label>
                    <input type="text" id="title" ref={titleRef} />
                </div>

                <div>
                    <label for="price">가격</label>
                    <input type="text" id="price" ref={priceRef} />
                </div>
            </form>
            <button onClick={handleSubmit}>생성</button>
        </div >
    )
};

export default App;
```
