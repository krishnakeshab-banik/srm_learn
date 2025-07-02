"use client"
import { useState, useEffect, useRef, useMemo } from 'react';

function* mergeSort(arr: number[], left: number, right: number): Generator<number[]> {
  if (left < right) {
    const mid = Math.floor((left + right) / 2);
    yield* mergeSort(arr, left, mid);
    yield* mergeSort(arr, mid + 1, right);
    yield* merge(arr, left, mid, right);
  }
  yield [...arr];
}

function* merge(arr: number[], left: number, mid: number, right: number): Generator<number[]> {
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);
  let i = 0, j = 0, k = left;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
    yield [...arr];
  }

  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
    yield [...arr];
  }

  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
    yield [...arr];
  }
}

const MergeSortVisualizer = () => {
  const initialArray = useMemo(() => [4, 5, 2, 7, 6, 1], []);
  const [data, setData] = useState<number[]>([...initialArray]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(500);
  const generatorRef = useRef<Generator<number[]> | null>(null);

  useEffect(() => {
    generatorRef.current = mergeSort([...initialArray], 0, initialArray.length - 1);
  }, [initialArray]);

  useEffect(() => {
    if (!isPlaying) return;

    let timeoutId: NodeJS.Timeout;

    const processStep = () => {
      if (!generatorRef.current) return;
      
      const result = generatorRef.current.next();
      if (result.done) {
        setIsPlaying(false);
        return;
      }

      setData(result.value);
      timeoutId = setTimeout(processStep, speed);
    };

    processStep();

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isPlaying, speed]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
    setData([...initialArray]);
    generatorRef.current = mergeSort([...initialArray], 0, initialArray.length - 1);
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(1000 - parseInt(e.target.value));
  };

  return (
    <div className="visualization-container">
      <div className="controls">
        <button onClick={handlePlayPause}>
          {isPlaying ? '⏸ Pause' : '▶ Play'}
        </button>
        <button onClick={handleReset}>↺ Reset</button>
        <div className="speed-control">
          <label>Speed:</label>
          <input
            type="range"
            min="100"
            max="1000"
            value={1000 - speed}
            onChange={handleSpeedChange}
          />
        </div>
      </div>
      <div className="chart">
        {data.map((value, index) => (
          <div
            key={index}
            className="bar"
            style={{
              height: `${value * 40}px`,
              width: `${80 / data.length}%`,
            }}
          >
            <span className="bar-label">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MergeSortVisualizer;

