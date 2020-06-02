import React from 'react';
import SaibaMais from '../SaibaMais/SaibaMais';
import Projetos from '../Projetos/Projetos';
import TopoDaPagina from '../TopoDaPagina/TopoDaPagina';

import './AssentamentoMS.css';

import foto1 from '../../assets/images/AssentamentoMS/Introducao/foto1.jpg';
import foto2 from '../../assets/images/AssentamentoMS/Introducao/foto2.png';
import foto3 from '../../assets/images/AssentamentoMS/Introducao/foto3.png';
import foto4 from '../../assets/images/AssentamentoMS/Introducao/foto4.png';
import foto5 from '../../assets/images/AssentamentoMS/Introducao/foto5.png';

const assentamentoMS = () =>{
    const conteudo = <ul className="card-text">
        <li><a href="https://www.facebook.com/AssentamentoMiltonSantos/posts/380597652019366/" target="_blank" rel="noopener noreferrer">Facebook Assentamento Milton Santos</a></li>
    </ul>;

    const projeto = [
        {titulo: 'HISTÓRIAS E LUTAS', link:'/mshistoriaelutas', alt: 'Bandeira do Somos Todos Milton Santos'},
        {titulo: 'COOP. COOPERFLORA', link:'/mscooperflora', alt: 'Visita dos alunos na Cooperflora'},
        {titulo: 'GRUPOS DE CONSUMO', link:'/msgruposdeconsumo', alt: 'Alimentos naturais e orgânicos'},
        {titulo: 'FEIRAS', link:'/msfeiras', alt: 'Vegetais em uma cesta'}
    ]

    return (
        <div>
            <TopoDaPagina menu="Assentamento Milton Santos" submenu=""></TopoDaPagina> 
            <div className="container-fluid AssentamentoMS">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <img src={foto1} width="100%" alt={"Entrada do Assentamento Milton Santos"}></img>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 texto1">
                        <p>O Assentamento Milton Santos está situado na região Sudeste do Estado de São Paulo, cuja área é montanhosa e de bioma entre o resquício de Mata Atlântica e cerrado, com Latitude 22º 44' 21'' S e Longitude 47º 19' 53'' W na Altitude de 545m. Possui cerca de 104 hectares (ha) dispostos entre 20,69 ha para reserva legal, 10,78 ha para área de preservação permanente (APP) e 71,98 ha destinados aos lotes. O assentamento possui 69 lotes de 1 ha para cada a família assentada e mais 3 lotes coletivos para a comunidade.</p>
                        <p>O Assentamento faz divisa com os municípios de Americana e Cosmópolis, abastecido principalmente pelo córrego Jacutinga que o atravessa. A área na qual o Assentamento foi estabelecido pertencia ao “Sítio Boa Vista” da família Abdalla para a exploração da cana-de-açúcar, que por meio de inadimplência para com a União a família perdeu a posse da área sob a alegação de dívidas trabalhistas. O Instituto Nacional de Previdência Social (INPS, atual INSS) passou a ser o detentor do “Sítio Boa Vista” a partir de 1977, e este foi repassado para o INCRA para fins de reforma agrária em 2004.</p>
                        <p>O INCRA assentou cerca de 150 famílias em dezembro de 2005 na área que correspondia a uma parte do Sítio Boa Vista. Entretanto, o processo de ocupação e permanência na área foi muito penoso, com falta de água, moradias precárias e com escassez de alimentos e transporte. Sendo assim, muitas das famílias desistiram de permanecer no local, resistindo apenas 68 famílias para serem assentadas em um total de 104 hectares, já com o formato de Projeto de Desenvolvimento Sustentável – PDS “Comuna da Terra”, sendo 1 hectare para cada família e formando o Assentamento Milton Santos.</p>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <SaibaMais conteudo={conteudo}></SaibaMais>

                <div className="album py-4 fundoImagem" >
                    <div className="container">
                        <div className="row titulo2">
                            <div className="col-md-12">
                                <p>SAIBA MAIS SOBRE O ASSENTAMENTO</p>
                            </div>
                        </div>

                        <div className="row">
                            <Projetos foto={foto2} titulo={projeto[0].titulo} link={projeto[0].link} alt={projeto[0].alt}></Projetos>
                            <Projetos foto={foto3} titulo={projeto[1].titulo} link={projeto[1].link} alt={projeto[1].alt}></Projetos>
                            <Projetos foto={foto4} titulo={projeto[2].titulo} link={projeto[2].link} alt={projeto[2].alt}></Projetos>
                        </div>

                        <div className="row">
                            <Projetos foto={foto5} titulo={projeto[3].titulo} link={projeto[3].link} alt={projeto[3].alt}></Projetos>
                        </div>
                    </div>  
                </div>

            </div>
        </div>
    )
}

export default assentamentoMS;