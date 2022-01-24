## 설치

```
npm i react-beautiful-dnd
npm i --save-dev @types/react-beautiful-dnd
```

## Docs

https://www.npmjs.com/package/react-beautiful-dnd
https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/about/installation.md
https://github.com/atlassian/react-beautiful-dnd/blob/HEAD/docs/api/droppable.md

## react-beautiful-dnd 테스트해 보기

https://react-beautiful-dnd.netlify.app/iframe.html?id=board--simple

## react-beautiful-dnd 예시 코드

https://codesandbox.io/s/k260nyxq9v

### [Droppable state snapshot](https://github.com/atlassian/react-beautiful-dnd/blob/HEAD/docs/api/droppable.md#2-snapshot-droppablestatesnapshot)

- isDraggingOver: boolean  
  현재 선택한 Draggable이 특정 Droppable위에 드래깅 되고 있는지 여부 확인

- draggingOverWith: ?DraggableId  
  Droppable 위로 드래그하는 Draggable ID

- draggingFromThisWith: ?DraggableId  
  현재 Droppable에서 벗어난 드래깅되고 있는 Draggable ID

- isUsingPlaceholder: boolean  
  placeholder가 사용되고 있는지 여부

## Code Challenge

1. save task state in local storage
2. delete tasks (dropping into a bin icon)
3. create a new board
4. reorder boards
