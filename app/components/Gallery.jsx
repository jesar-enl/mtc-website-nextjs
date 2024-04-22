// import { grid1, grid2, grid3, grid4 } from '@/app/data';
import Image from 'next/image';

export default function Gallery() {
  return (
    <div className="bg-gray-300 px-4 py-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* <div className="grid gap-4">
          {grid1.map((grid1) => (
            <div key={grid1}>
              <Image
                src={grid1}
                alt=""
                width="400"
                className="h-auto max-w-full rounded-lg"
                height="200"
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {grid2.map((grid2) => (
            <div key={grid2}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={grid2}
                alt=""
                width="400"
                height={200}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {grid3.map((grid3) => (
            <div key={grid3}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={grid3}
                alt=""
                width="400"
                height={200}
              />
            </div>
          ))}
        </div>
        <div className="grid gap-4">
          {grid4.map((grid4) => (
            <div key={grid4}>
              <Image
                className="h-auto max-w-full rounded-lg"
                src={grid4}
                alt=""
                width="400"
                height={200}
              />
            </div>
          ))}
        </div> */}
        
          <a href="https://ibb.co/bNvfyZb">
            <Image
              src="https://i.ibb.co/Jrphb43/cm1.jpg"
              alt="cm1"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/5Rcm5wN">
            <Image
              src="https://i.ibb.co/gRgNDh5/cm2.jpg"
              alt="cm2"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/8xZcqbG">
            <Image
              src="https://i.ibb.co/xgTHWYw/cm3.jpg"
              alt="cm3"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/JrZXfWq">
            <Image
              src="https://i.ibb.co/MPdqYyf/cm4.jpg"
              alt="cm4"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/FBGHc2V">
            <Image
              src="https://i.ibb.co/2jXZRxN/cm5.jpg"
              alt="cm5"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/GC7wPVj">
            <Image
              src="https://i.ibb.co/5sTDc5V/cm6.jpg"
              alt="cm6"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/D1nqPMf">
            <Image
              src="https://i.ibb.co/51V7Xjh/cm7.jpg"
              alt="cm7"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/0hz7RGn">
            <Image
              src="https://i.ibb.co/syXfdVg/cm8.jpg"
              alt="cm8"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/JHhPQmV">
            <Image
              src="https://i.ibb.co/QM5GdpL/cm9.jpg"
              alt="cm9"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/sV9vbh8">
            <Image
              src="https://i.ibb.co/gRZMmGk/cm10.jpg"
              alt="cm10"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/hVHf0Y3">
            <Image
              src="https://i.ibb.co/6FbBQXj/cm11.jpg"
              alt="cm11"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/kgP7tQp">
            <Image
              src="https://i.ibb.co/ccsBjDP/cm12.jpg"
              alt="cm12"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/1RQzKvX">
            <Image
              src="https://i.ibb.co/P1jD4mW/cm13.jpg"
              alt="cm13"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/1Mk7S6x">
            <Image
              src="https://i.ibb.co/DYZzqpn/cm14.jpg"
              alt="cm14"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/FstRsjF">
            <Image
              src="https://i.ibb.co/k3FN3Wt/i1.jpg"
              alt="i1"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/YyCYcpg">
            <Image
              src="https://i.ibb.co/LJFbxnK/i2.jpg"
              alt="i2"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/ynYBvJQ">
            <Image
              src="https://i.ibb.co/3yMY6HC/i3.jpg"
              alt="i3"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/gRCM6rC">
            <Image
              src="https://i.ibb.co/G5jvFdj/i4.jpg"
              alt="i4"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/ypZRy6B">
            <Image
              src="https://i.ibb.co/W0M3ykp/i5.jpg"
              alt="i5"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/60fzwBT">
            <Image
              src="https://i.ibb.co/nM59mCY/i6.jpg"
              alt="i6"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/7R2wqf1">
            <Image
              src="https://i.ibb.co/hZDPS6m/i7.jpg"
              alt="i7"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/n3hBjKM">
            <Image
              src="https://i.ibb.co/7g7QK0t/i8.jpg"
              alt="i8"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/bFy2PB7">
            <Image
              src="https://i.ibb.co/0KWFcMQ/mashs1.jpg"
              alt="mashs1"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/m4533qj">
            <Image
              src="https://i.ibb.co/QMv44Ng/mashs2.jpg"
              alt="mashs2"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/VMF9Zfb">
            <Image
              src="https://i.ibb.co/h2G9j3r/mashs3.jpg"
              alt="mashs3"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/0VDXJ3r">
            <Image
              src="https://i.ibb.co/pr0PXpd/mashs4.jpg"
              alt="mashs4"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/pRhCrpB">
            <Image
              src="https://i.ibb.co/ZY2y1Cp/mashs5.jpg"
              alt="mashs5"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/Drr5Wrg">
            <Image
              src="https://i.ibb.co/y44WP4B/mashs6.jpg"
              alt="mashs6"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/T80yfr2">
            <Image
              src="https://i.ibb.co/zR2dMNx/mashs7.jpg"
              alt="mashs7"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/CzzXPNZ">
            <Image
              src="https://i.ibb.co/f22KDB5/p2.jpg"
              alt="p2"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/CKK7NPc">
            <Image
              src="https://i.ibb.co/v44PgXF/p1.jpg"
              alt="p1"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/5nFbv3Y">
            <Image
              src="https://i.ibb.co/BrN0jJ4/p3.jpg"
              alt="p3"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/L9s5cvs">
            <Image
              src="https://i.ibb.co/vLMYTDM/p4.jpg"
              alt="p4"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/cYx41kv">
            <Image
              src="https://i.ibb.co/bb7cPQ3/p5.jpg"
              alt="p5"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/QDGND4T">
            <Image
              src="https://i.ibb.co/hYvWYS4/p9.jpg"
              alt="p9"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/dLrRDts">
            <Image
              src="https://i.ibb.co/k9xtXJV/p10.jpg"
              alt="p10"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/YXWSLcX">
            <Image
              src="https://i.ibb.co/nB0yL7B/poster1.jpg"
              alt="poster1"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/5FxbFFx">
            <Image
              src="https://i.ibb.co/Dpg0ppg/socio1.jpg"
              alt="socio1"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/G7XSMnD">
            <Image
              src="https://i.ibb.co/hskzdLN/socio2.jpg"
              alt="socio2"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/2tYGbXd">
            <Image
              src="https://i.ibb.co/DCg0q3Q/socio3.jpg"
              alt="socio3"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/wJ6zPwm">
            <Image
              src="https://i.ibb.co/N1YyJmB/w2.jpg"
              alt="w2"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/hV0tqdc">
            <Image
              src="https://i.ibb.co/vk9Ktdh/w3.jpg"
              alt="w3"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/44qSTfH">
            <Image
              src="https://i.ibb.co/XFQ5s4q/w4.jpg"
              alt="w4"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/K0K9cfL">
            <Image
              src="https://i.ibb.co/smWFpN6/w5.jpg"
              alt="w5"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/4T05Fjb">
            <Image
              src="https://i.ibb.co/gTcBrD0/y1.jpg"
              alt="y1"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/FVQGn8B">
            <Image
              src="https://i.ibb.co/YZ5vbft/y2.jpg"
              alt="y2"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/4KDPZw8">
            <Image
              src="https://i.ibb.co/17p8fYr/y9.jpg"
              alt="y9"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/wJWNbgj">
            <Image
              src="https://i.ibb.co/xmjScLd/w1.jpg"
              alt="w1"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/cFX58rb">
            <Image
              src="https://i.ibb.co/qsFGgr0/y10.jpg"
              alt="y10"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/4VRt648">
            <Image
              src="https://i.ibb.co/9rHgFyb/y11.jpg"
              alt="y11"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/TgJMLyz">
            <Image
              src="https://i.ibb.co/2kR3NJX/y12.jpg"
              alt="y12"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/bHrM3ZJ">
            <Image
              src="https://i.ibb.co/mvHVBw8/y13.jpg"
              alt="y13"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/crFPqnq">
            <Image
              src="https://i.ibb.co/VqSd646/y14.jpg"
              alt="y14"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/Z1vPL1g">
            <Image
              src="https://i.ibb.co/prN80rK/y15.jpg"
              alt="y15"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/b1DwbMS">
            <Image
              src="https://i.ibb.co/Px0XDv7/y16.jpg"
              alt="y16"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/88cykM7">
            <Image
              src="https://i.ibb.co/h8fG0sm/y17.jpg"
              alt="y17"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/jz6BN8C">
            <Image
              src="https://i.ibb.co/m0D1jRn/y18.jpg"
              alt="y18"
              border="0"
              width="400"
              height="200"
            />
          </a>
          <a href="https://ibb.co/1bmnT2p">
            <Image
              src="https://i.ibb.co/JCsdHkb/y19.jpg"
              alt="y19"
              border="0"
              width="400"
              height="200"
            />
          </a>
          
      </div>
    </div>
  );
}
