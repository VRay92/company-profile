import * as React from "react";

interface IFungicideProps {}

const Fungicide: React.FunctionComponent<IFungicideProps> = (props) => {
  return (
    <div className=" flex pb-20 pt-20 md:px-[5rem]">
      <table className="hidden w-full md:block">
        <thead>
          <tr className="h-[5rem] bg-[#7E3F98] text-xl text-white">
            <th className="w-1/4">Brands</th>
            <th className="w-1/4">Product Name</th>
            <th className="w-1/4">Product Type/Group</th>
            <th className="w-1/4">Description</th>
          </tr>
        </thead>
        <tbody className="w-fit">
          <tr className="h-[10rem]">
            <td className="">
              <img src="nostro.webp" className="w-[15rem]" />
            </td>
            <td>Nostro 440EC</td>
            <td>Fungicide Selective Pre & Post-Emergent</td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Fungicide in the form of light brown suspendable powder, used to
              control both broadleaf and narrow-leaf weeds in corn crops. <br />
              Crop Target: corn
              <br />
              <button className=" h-[2rem] w-[5rem] rounded-md bg-orange-400 text-white">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td className="">
              <img src="partners.webp" className="w-[15rem]" />
            </td>
            <td>Partners 722SL</td>
            <td>
              Fungicide Systemic <br /> Post-Emergent
            </td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Post-emergent Fungicide that works systematically and on contact,
              to control narrow-leaf, broadleaf, and sedge weeds
              <br />
              Crop Target: rice
              <br />
              <button className=" h-[2rem] w-[5rem] rounded-md bg-orange-400 text-white">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td className="">
              <img src="fenapir.webp" className="w-[15rem]" />
            </td>
            <td>Fenapir 450SC</td>
            <td>
              Fungicide Systemic <br /> Post-Emergent
            </td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Systemic post-emergent Fungicide and arboricide, in concentrated
              emulsifiable form
              <br />
              Crop Target: rice, rubber, palm
              <br />
              <button className=" h-[2rem] w-[5rem] rounded-md bg-orange-400 text-white">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td className="">
              <img src="proteger.webp" className="w-[15rem]" />
            </td>
            <td>Proteger</td>
            <td>
              Fungicide Selective <br /> Post-Emergent
            </td>
            <td className="space-y-5 px-5 pt-5 text-start text-base">
              Systemic post-emergent Fungicide and arboricide, in concentrated
              emulsifiable form
              <br />
              Crop Target: rice, rubber, palm
              <br />
              <button className=" h-[2rem] w-[5rem] rounded-md bg-orange-400 text-white">
                Details
              </button>
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>
        </tbody>
      </table>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <table className=" w-full md:hidden ">
        <thead>
          <tr className="h-[5rem] w-full bg-[#7E3F98] text-xl text-white">
            <th className="w-full">Brands</th>
          </tr>
        </thead>
        <tbody>
          <tr className="h-[10rem]">
            <td>
              <img src="nostro.webp" className="w-[15rem]" />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <img src="partners.webp" className="w-[15rem]" />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <img src="fenapir.webp" className="w-[15rem]" />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>

          <tr className="h-[10rem]">
            <td>
              <img src="proteger.webp" className="w-full" />
            </td>
          </tr>
          <tr>
            <td colSpan={4} className="h-[2rem] border-b-2 border-[#ebecf0]" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Fungicide;
