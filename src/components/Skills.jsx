import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as Python } from '../Assets/Skills/Python.svg';
import { ReactComponent as ApacheAirflow } from '../Assets/Skills/ApacheAirflow.svg';
import { ReactComponent as ApacheSpark } from '../Assets/Skills/ApacheSpark.svg';
import { ReactComponent as CPP } from '../Assets/Skills/CPP.svg';
import { ReactComponent as CSSName } from '../Assets/Skills/CSS.svg';
import { ReactComponent as Django } from '../Assets/Skills/Django.svg';
import { ReactComponent as EC2 } from '../Assets/Skills/EC2.svg';
import { ReactComponent as EMR } from '../Assets/Skills/EMR.svg';
import { ReactComponent as HTMLName } from '../Assets/Skills/HTML.svg';
import { ReactComponent as MATLAB } from '../Assets/Skills/MATLAB.svg';
import { ReactComponent as PBI } from '../Assets/Skills/PBI.svg';
import { ReactComponent as ReactJsName } from '../Assets/Skills/ReactJs.svg';
import { ReactComponent as SQL } from '../Assets/Skills/SQL.svg';
import { ReactComponent as VBA } from '../Assets/Skills/VBA.svg';
import { ReactComponent as Bootstrap } from '../Assets/Skills/Bootstrap.svg';
import { ReactComponent as FlaskName } from '../Assets/Skills/Flask.svg';
import { ReactComponent as ApacheNIFI } from '../Assets/Skills/ApacheNIFI.svg';
import { ReactComponent as Databricks } from '../Assets/Skills/Databricks.svg';
import { ReactComponent as MINIO } from '../Assets/Skills/MINIO.svg';
import { ReactComponent as Trino } from '../Assets/Skills/Trino.svg';

const SkillIcon = ({ Icon, name }) => (
    <motion.div
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center"
    >
      <Icon className="w-16 h-16 mb-2" />
      <span className="text-sm text-gray-300">{name}</span>
    </motion.div>
  );

const Skills = () => {
    {/* Skills Section */}
    <section id="skills" className="py-20 px-6 bg-gray-800 text-white">
    <div className="container mx-auto">
    <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center text-blue-400 mb-12"
        >
        Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <SkillIcon Icon={Python} name="Python" />
            <SkillIcon Icon={SQL} name="SQL" />
            <SkillIcon Icon={ApacheSpark} name="Pyspark ⦿ SQL ⦿ Scala" />
            <SkillIcon Icon={ApacheAirflow} name="Apache Airflow" />
            <SkillIcon Icon={ApacheNIFI} name="Apache NiFi" />
            <SkillIcon Icon={EC2} name="Amazon EC2" />
            <SkillIcon Icon={EMR} name="Amazon EMR" />
            <SkillIcon Icon={Databricks} name="Databricks" />
            <SkillIcon Icon={MINIO} name="MINIO" />
            <SkillIcon Icon={Trino} name="Trino" />
            <SkillIcon Icon={HTMLName} name="HTML" />
            <SkillIcon Icon={CSSName} name="Tailwind CSS" />
            <SkillIcon Icon={Bootstrap} name="Bootstrap" />
            <SkillIcon Icon={ReactJsName} name="React JS" />
            <SkillIcon Icon={Django} name="Django" />
            <SkillIcon Icon={FlaskName} name="Flask" />
            <SkillIcon Icon={PBI} name="Power BI" />
            <SkillIcon Icon={CPP} name="C++" />
            <SkillIcon Icon={MATLAB} name="MATLAB" />
            <SkillIcon Icon={VBA} name="Excel VBA" />
        </div>
        </div>
    </section>
};
  
  export default Skills;