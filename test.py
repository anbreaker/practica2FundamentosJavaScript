import unittest
from romanNumbers import romano_a_arabigo
from romanNumbers import arabigo_a_romano
from romanNumbers import contarParentesis
from unittest.mock import patch


class RomanNumberTest(unittest.TestCase):
    def test_symbol_roman(self):
        self.assertEqual(romano_a_arabigo('I'), 1)
        self.assertEqual(romano_a_arabigo('V'), 5)
        self.assertEqual(romano_a_arabigo('X'), 10)
        self.assertEqual(romano_a_arabigo('L'), 50)
        self.assertEqual(romano_a_arabigo('C'), 100)
        self.assertEqual(romano_a_arabigo('D'), 500)
        self.assertEqual(romano_a_arabigo('M'), 1000)
        self.assertEqual(romano_a_arabigo('A'), 0)

    def test_numeros_crecientes(self):
        self.assertEqual(romano_a_arabigo('III'), 3)
        self.assertEqual(romano_a_arabigo('IIII'), 0)
        self.assertEqual(romano_a_arabigo('XVI'), 16)
        self.assertEqual(romano_a_arabigo('XXIII'), 23)
        self.assertEqual(romano_a_arabigo('CCC'), 300)

    def test_no_mas_de_tres_repeticiones(self):
        self.assertEqual(romano_a_arabigo('LXXIII'), 73)
        self.assertEqual(romano_a_arabigo('IIII'), 0)
        self.assertEqual(romano_a_arabigo('CCCC'), 0)
        self.assertEqual(romano_a_arabigo('VV'), 0)

    def test_numeros_decrecientes(self):
        self.assertEqual(romano_a_arabigo('CMXCIX'), 999)
        self.assertEqual(romano_a_arabigo('MMCMLXIX'), 2969)
        self.assertEqual(romano_a_arabigo('XCIX'), 99)

    def test_restas_no_adminte_repeticion(self):
        self.assertEqual(romano_a_arabigo('MIIX'), 0)

    def test_restas_no_adminten_derivados_del_5(self):
        self.assertEqual(romano_a_arabigo('VC'), 0)
        self.assertEqual(romano_a_arabigo('VL'), 0)

    def test_restas_no_adminten_mas_de_un_orden_de_diferencia(self):
        self.assertEqual(romano_a_arabigo('IC'), 0)
        self.assertEqual(romano_a_arabigo('IL'), 0)
        self.assertEqual(romano_a_arabigo('VL'), 0)


class ArabicNumberTest(unittest.TestCase):
    def test_arabic_a_roman(self):
        self.assertEqual(arabigo_a_romano(1123), 'MCXXIII')
        self.assertEqual(arabigo_a_romano(1678), 'MDCLXXVIII')
        self.assertEqual(arabigo_a_romano(2123), 'MMCXXIII')
        self.assertEqual(arabigo_a_romano(2144), 'MMCXLIV')
        self.assertEqual(arabigo_a_romano(3999), 'MMMCMXCIX')


if __name__ == '__main__':
    unittest.main()