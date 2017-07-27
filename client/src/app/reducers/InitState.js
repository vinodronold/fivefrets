export default {
  toolbar: {
    isDrawerOpen: false,
    isOptionsOpen: false,
    btns: [],
    opts: [
      {
        label: 'Test',
        OnClick: () => {
          console.log('Option Clicked!!')
        }
      }
    ]
  },
  player: {
    id:'',
    status: -1,
    activechord: 1,
    ytid: '',
    transpose: 0
  },
  songs: {
    IarsrX60bZw: {
      title: 'Thalli Pogathey',
      subtitle: 'subtitle',
      chords: {
        1: { c: 'A', t: 1 },
        2: { c: 'A', t: 2 },
        3: { c: 'A', t: 3 },
        4: { c: 'A', t: 4 },
        5: { c: 'A', t: 5 },
        6: { c: 'A', t: 6 },
        7: { c: 'A', t: 7 },
        8: { c: 'A', t: 8 }
      }
    },
    b876JFQ2dp4: {
      title: 'Thalli Pogathey',
      subtitle: 'subtitle',
      chords: {
        1: { c: 'A', t: 1, pulse: true },
        2: { c: 'A', t: 2, active: true },
        3: { c: 'A', t: 3 },
        4: { c: 'A', t: 4 },
        5: { c: 'A', t: 5 },
        6: { c: 'A', t: 6 },
        7: { c: 'A', t: 7 },
        8: { c: 'A', t: 8 }
      }
    },
    AxoZv5KTsSA: {
      title: 'Achcham Yenbadhu Madamaiyada -Thalli Pogathey',
      subtitle: 'subtitle',
      chords: {
        1: { c: 'A', t: 1, pulse: true },
        2: { c: 'A', t: 2, active: true },
        3: { c: 'A', t: 3 },
        4: { c: 'A', t: 4 },
        5: { c: 'A', t: 5 },
        6: { c: 'A', t: 6 },
        7: { c: 'A', t: 7 },
        8: { c: 'A', t: 8 }
      }
    },
    'k6co-F5XjKw': {
      title: 'Thalli Pogathey Official',
      subtitle: 'subtitle',
      chords: {
        1: { c: 'A', t: 1, pulse: true },
        2: { c: 'A', t: 2, active: true },
        3: { c: 'A', t: 3 },
        4: { c: 'A', t: 4 },
        5: { c: 'A', t: 5 },
        6: { c: 'A', t: 6 },
        7: { c: 'A', t: 7 },
        8: { c: 'A', t: 8 }
      }
    }
  }
}
