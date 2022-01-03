using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Ej4jquery
{
    /// <summary>
    /// Descripción breve de test
    /// </summary>
    public class Test : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            string param1 = context.Request["param1"].ToString();
            string param2 = context.Request["param2"].ToString();

            string saludo = string.Format("Hola {0} {1}", param1, param2);
            context.Response.Write(saludo);

        }


        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}