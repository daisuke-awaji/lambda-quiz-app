import { Question } from '../types/quiz';

export const questions: Question[] = [
  {
    id: 1,
    question: 'AWS Lambdaが最初にリリースされた年は？',
    options: ['2012年', '2013年', '2014年', '2015年'],
    correctAnswer: 2,
    explanation: 'AWS Lambdaは2014年11月にAWS re:Inventで発表され、サーバーレスコンピューティングの先駆けとなりました！'
  },
  {
    id: 2,
    question: 'AWS Lambdaのデフォルトの最大実行時間は？',
    options: ['5分', '10分', '15分', '1時間'],
    correctAnswer: 2,
    explanation: 'デフォルトのタイムアウト制限は15分（900秒）です。最小は1秒、最大は15分に設定できます。'
  },
  {
    id: 3,
    question: '次のうち、AWS Lambdaがネイティブにサポートしていないランタイムはどれ？',
    options: [
      'Node.js 18.x',
      'Python 3.11',
      'PHP 8.2',
      'Java 17'
    ],
    correctAnswer: 2,
    explanation: 'PHPは現在、AWS Lambdaのネイティブランタイムとしてサポートされていません。カスタムランタイムとして実行する必要があります。'
  },
  {
    id: 4,
    question: 'AWS Lambdaの料金請求の基準単位は？',
    options: [
      '実行回数のみ',
      'メモリ使用量のみ',
      '実行時間のみ',
      '実行回数と実行時間（メモリ使用量を含む）'
    ],
    correctAnswer: 3,
    explanation: 'Lambdaは、関数の実行回数と、実行時間×割り当てメモリに基づいて料金が発生します。また、最初の100万リクエストは無料です！'
  },
  {
    id: 5,
    question: 'AWS Lambdaの関数にデフォルトで割り当てられるメモリ量は？',
    options: [
      '128MB',
      '256MB',
      '512MB',
      '1024MB'
    ],
    correctAnswer: 1,
    explanation: 'デフォルトのメモリ割り当ては128MBです。必要に応じて10,240MBまで設定可能です。'
  },
  {
    id: 6,
    question: 'Lambda関数のコールドスタートを軽減するために使用できる機能は？',
    options: [
      'プロビジョニングされた同時実行',
      'スポットインスタンス',
      'オートスケーリング',
      'リザーブドインスタンス'
    ],
    correctAnswer: 0,
    explanation: 'Provisioned Concurrency（プロビジョニングされた同時実行）を使用することで、関数を事前に初期化し、コールドスタートを防ぐことができます。'
  },
  {
    id: 7,
    question: 'AWS Lambdaで利用できるデプロイパッケージの最大サイズは？',
    options: [
      '50MB（圧縮）',
      '250MB（圧縮）',
      '500MB（解凍後）',
      '50MB（解凍後）'
    ],
    correctAnswer: 1,
    explanation: 'デプロイパッケージ（.zipファイル）の最大サイズは250MB（圧縮）で、解凍後は最大500MBまで対応しています。'
  }
];